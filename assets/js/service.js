let cancel = document.querySelector(".detail-close")
let detailContainer = document.querySelector(".detail-section")
let detailButton =  document.querySelectorAll(".detail-btn")
let serviceType = document.querySelector(".service-type")
let servicePrice = document.querySelector(".price-tag")
let detailParagraph = document.querySelector(".detail-paragraph")
let estTime = document.querySelector(".time")
let toDoTask = document.querySelector(".task")
let detailIcon = document.querySelector("#my-icon")
let detailBackground = document.querySelector("#detailback")
let feature = document.querySelectorAll(".List")


let detail = [
    {
        title: "Grocery & Shopping",
        price: "From ₦1,500",
        paragraph: "Fresh groceries, pharmacy items, and retail shopping from your favorite stores.",
        time: "1-2 hours",
        requirements: "Provide shopping list and preferred stores",
        icon: "fa-cart-shopping",
        background: "shopping",
        feature: [
            "Fresh produce selection",
            "Pharmacy deliveries",
            "Retail shopping",
            "Receipt photos",
        ]
    },
    {
        title: "Package Delivery",
        price: "From ₦1,000",
        paragraph: "Secure pickup and delivery of packages, documents, and parcels across Lagos.",
        time: "30 mins- 3 hours",
        requirements: "Pickup and delivery addresses required",
        icon: "fa-box-open",
        color: "green",
        background: "shopping",
    },
    {
        title: "House Cleaning",
        price: "From ₦8,000",
        paragraph: "Professional home cleaning services including deep cleaning, regular maintenance, and organization.",
        time: "2-4 hours",
        requirements: "Home size and type of cleaning needed",
        icon: "fa-house",
        color: "green",
        background: "shopping",
    },
    {
        title: "Home Repairs",
        price: "From ₦5,000",
        paragraph: "Handyman services for plumbing, electrical, carpentry, and general home maintenance.",
        time: "1-3 hours",
        requirements: "Describe the issue and location",
        icon: "fa-wrench",
        color: "green",
        background: "shopping",
    },
    {
        title: "Vehicle Services",
        price: "From ₦2,000",
        paragraph: "Car wash, fuel filling, vehicle inspection, maintenance, and auto detailing.",
        time: "1-2 hours",
        requirements: "Vehicle location and service type",
        icon: "fa-car-side",
        color: "green",
        background: "shopping",
    },
    {
        title: "Beauty & Wellness",
        price: "From ₦3,500",
        paragraph: "Mobile beauty services including hair styling, manicure, pedicure, and wellness treatments.",
        time: "1-3 hours",
        requirements: "Specify service and preferred location",
        icon: "fa-scissors",
        color: "green",
        background: "shopping",
    },
    {
        title: "Childcare & Babysitting",
        price: "From ₦4,000",
        paragraph: "Trusted childcare services, babysitting, and child supervision for busy parents.",
        time: "2+ hours",
        requirements: "Child's age and special requirements",
        icon: "fa-child",
        color: "green",
        background: "shopping",
    },
    {
        title: "Tutoring & Education",
        price: "From ₦6,000",
        paragraph: "Home tutoring services for various subjects and exam preparation.",
        time: "1-2 hours per session",
        requirements: "Subject, level, and learning goals",
        icon: "fa-graduation-cap",
        color: "green",
        background: "shopping",
    },
    {
        title: "Elder Care",
        price: "From ₦7,500",
        paragraph: "Companion care and assistance services for elderly family members.",
        time: "2+ hours",
        requirements: "Care needs and special instructions",
        icon: "fa-heart",
        color: "green",
        background: "shopping",
    },
    {
        title: "Food & Catering",
        price: "From ₦2,200",
        paragraph: "Restaurant pickups, catering orders, meal preparation, and special dietary requirements.",
        time: "30mins - 1hour",
        requirements: "Restaurant name and order details",
        icon: "fa-mug-hot",
        color: "green",
        background: "shopping",
    },
    {
        title: "Event Support",
        price: "From ₦10,000",
        paragraph: "Photography, event setup, decoration, and event management assistance.",
        time: "3+ hours",
        requirements: "Event details, date, and venue",
        icon: "fa-camera",
        color: "green",
        background: "shopping",
    },
    {
        title: "Business Services",
        price: "From ₦3,000",
        paragraph: "Office assistance, meeting support, presentation setup, and business errands.",
        time: "1-3 hours",
        requirements: "Business task details",
        icon: "fa-suitcase",
        color: "green",
        background: "shopping",
    },
]

function removeDetail (){
    detailContainer.style.display = "none"
}
cancel.addEventListener("click", removeDetail)



function displaydetail (index){
    detailContainer.style.display = "block"
    serviceType.innerText = detail[index].title
    servicePrice.innerText = detail[index].price
    detailParagraph.innerText = detail[index].paragraph
    estTime.innerText = detail[index].time
    toDoTask.innerText = detail[index].requirements
    detailIcon.className = "fa-solid " + detail[index].icon
    detailBackground.className = "service-icon " + detail[index].background
   console.log(feature.innerText = detail[index].feature[index]) 
}

for(let i = 0; i <= 11; i++){
    detailButton[i].addEventListener("click", () => displaydetail(i))
}