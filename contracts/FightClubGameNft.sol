// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";







contract FightClubGameNft is ERC1155Supply , Ownable{


    uint256 private COST = 1000000000000000000  ;
    mapping(uint256 => mapping(address => uint256)) private _balances;
    uint256[] private charactersIds = [1,2,3,4,5,6,7,8,9];
    mapping(uint256 => string) private tokensUri;

    bool public flag = false;
    string public baseUri;
    IERC20 public FCG;
    address tokenAddress;

    struct Fighter{
        address owner;
        uint256 id;
        uint256 amount;
        string uri;
    }

    Fighter[] private fighters; 
    


//address _tokenAddress
    constructor(address _tokenAddress, string memory _baseUri) ERC1155("") {
        baseUri = _baseUri;
        tokenAddress = _tokenAddress;
        FCG = IERC20(address(_tokenAddress));
    }
    

    function setURI(string memory newuri) public onlyOwner returns (bool) {
        _setURI(newuri);
        baseUri = newuri;
        return true;
    }

    function uri(uint256 _tokenId) public view virtual override returns (string memory) {
        return (string(abi.encodePacked(baseUri, Strings.toString(_tokenId),".json")));

    }

    function balanceOf(address account, uint256 id) public view virtual override returns (uint256) {
        require(account != address(0), "ERC1155: balance query for the zero address");
        return _balances[id][account];
    }

    function mintCharacter(address to, uint256 id, uint256 amount) public payable  returns(bool){
        require(to != address(0), "ERC1155: mint to the zero address");
        require(FCG.approve(address(this), amount * COST), "can't approve your token");
        require(FCG.allowance(msg.sender, address(this)) >= COST, "Not enough of FCG token");//To ensure they will deposit the right amount
        FCG.transferFrom(msg.sender, address(this), amount * COST);
        _mintCharacter(to, id, amount);
        _balances[id][to] +=amount;
        return true;
    }

    function _mintCharacter(address to, uint256 id, uint256 amount) internal returns (bool) {
        bool exists = false;
        uint256 i = 0;
        _mint(to, id, amount, "");
        for( i = 0; i<fighters.length; i++){
            if( fighters[i].owner == to ){
                if( fighters[i].id == id ){
                    exists = true;
                    break;
                }
            }
        }
        if( exists == true) {
                fighters[i].amount += amount;
        } else {
                string memory link = uri(id);
                Fighter memory newFighter = Fighter(to,id,amount,link);
                fighters.push(newFighter);
        }

        
        return true;
    }

    // function mintCharacterBatch(address to, uint256[] memory ids, uint256[] memory amounts) public payable returns(bool){
    //     require(to != address(0), "ERC1155: mint to the zero address");
    //     for(uint i=0; i<amounts.length ; i++){
    //         require(FCG.approve(address(this), amounts[i] * COST), "can't approve your token");
    //         require(FCG.allowance(msg.sender, address(this)) >= amounts[i] * COST, "Not enough of FCG token");//To ensure they will deposit the right amount
    //         FCG.transferFrom(msg.sender, address(this), amounts[i] * COST);
    //     }
    //     _batchMintCharacter(to, ids, amounts);
    //     return true;
    // }


    // function _batchMintCharacter(address to, uint256[] memory ids, uint256[] memory amounts) internal returns(bool){
    //     bool exists = false;
    //     uint256 i = 0;
    //     uint256 j = 0;
    //     string memory link = "";
    //     _mintBatch(to, ids, amounts, "");
    //     for( i = 0; i < ids.length; i++){
    //         for( j = 0; j<fighters.length; j++){
    //             if( fighters[j].owner == to){
    //                 if(fighters[j].id == ids[i]){
    //                     exists = true;
    //                     break;
    //                 }
    //             }

    //         }
    //         if( exists == true ){
    //             fighters[j].amount += amounts[i];
    //         }else{
    //             link = uri(ids[i]);
    //             Fighter memory newFighter = Fighter(to,ids[i],amounts[i],link);
    //             fighters.push(newFighter);
    //         }
    //     }
    //     i=0;
    //     for ( i = 0; i < ids.length; ++i){
    //         link = uri(ids[i]);
    //         _balances[ids[i]][to] +=amounts[i];
    //         Fighter memory newFighter = Fighter(to, ids[i], amounts[i], link);
    //         fighters.push(newFighter);
    //     }
        
    //     return true;
    // }

    // function balanceOfBatch(address[] memory accounts, uint256[] memory ids) public view virtual override returns (uint256[] memory) {
    //         require(accounts.length == ids.length, "ERC1155: accounts and ids length mismatch");
    //         uint256[] memory batchBalances = new uint256[](accounts.length);
    //         for (uint256 i = 0; i < accounts.length; ++i) {
    //             batchBalances[i] = balanceOf(accounts[i], ids[i]);
    //         }
    //     return batchBalances;
    // }

    function withdraw(uint256 _amount) external onlyOwner {
        require(FCG.balanceOf(address(this)) >= _amount ,"The smart contract does not have the amount you requested");
        FCG.transfer(msg.sender, _amount);
    }

    function getAllFighters() public view returns(Fighter[] memory){
        return fighters;
    }

    function getOwnerFighters(address _owner) public view returns(Fighter[] memory){
        uint256 balance = 0;
        for(uint256 i=1; i<charactersIds.length ; i++){
            if(balanceOf(_owner, i) > 0){
                balance += 1;
            }
        }
        Fighter[] memory result  = new Fighter[](balance);
        uint256 counter = 0;
        for(uint256 i=0 ; i < fighters.length ; i++){
            if(fighters[i].owner == _owner){
                result[counter] = fighters[i];
                counter ++;
            }
        }
        return result;
    }




}