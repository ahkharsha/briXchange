// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract MyContract {
    struct Property {
        uint256 productId;
        address owner;
        uint256 price;
        string propertyTitle;
        string category;
        string images;
        string propertyAddress;
        string description;
        address[] reviewers;
        string[] reviews[];
    }

    //Mapping
    mapping(uint256 => Propert) private properties;
    uint256 public propertyIndex;

    //Events
    event PropertyListed(uint256 indexed id, address indexed owner, uint256 price);
    event PropertySold(uint256 indexed id, address indexed oldOwner, address indexed newOwner, uint256 price);
    event PropertyResold(uint256 indexed id, address indexed oldOwner, address indexed newOwner, uint256 price);

    //REVIEWS MODEL
    struct Review {
        address reviewer;
        uint256 productID;
        uint8 rating;
        string comment;
        uint256 likes;
        uint256 reviewIndex;
    }
    
    struct Product {
        uint256 productId;
        uint256 totalRating;
        uint256 numReviews;
    }

    mapping(uint256 => Review[]) private reviews;
    mapping(address => uint256[]) private userReviews;
    mapping(uint256 => Product) private products;

    uint256 public reviewsCounter;
    

    event ReviewAdded(uint256 indexed productId, address indexed reviewer, uint8 rating, string comment);
    event ReviewLiked(uint256 indexed productId, uint256 indexed reviewIndex, address indexed liker, uint256 likes);

    function listProperty(address owner, uint256 price, string memory _propertyTitle, string memory _category,
     string memory _images, string memory _propertyAddress, string memory _description
     ) external returns (uint256) {
        require (price>0, "Price must be greater than 0");
        uint256 propertyId = propertyIndex++;
        Property storage property = properties[productId];

        property.productID = productId;
        property.owner = owner;
        property.price = price;
        property.propertyTitle = _propertyTitle;
        property.category = _category;
        property.images = _images;
        property.propertyAddress = _propertyAddress;
        property.description = _description;
        
        emit PropertyListed(productId, owner, price);
     }

    function updateProperty(address owner, uint256 productId,  string memory _propertyTitle, string memory _category,
    string memory _images, string memory _propertyAddress, string memory _description) external returns (uint256){
       
        Property storage property = properties[productId];
        require(property.owner == owner, "You are not an owner");
    }

    function buyProperty () external payable{}

    function getAllProperties () public view returns(Property[] memory) {}

    function getProperty() external view returns() {}

    function getUserProperties() external view returns(Property[] memory) {}


    // Reviews function
    function addReview() external{}

    function getProductReviews() external view returns(Review[] memory) {}

    function getUserReviews() external view returns(Review[] memory) {}

    function likeReview() external{}
    
    function getHighestRatedProduct() external view returns (uint)
}