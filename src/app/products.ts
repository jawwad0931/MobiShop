export interface Product {
    Id: number;
    PhoneName: string;
    PhonePrice: number;
    Description: string;
    ImageUrl: string; // New property for image URL
}

export const products = [
    { Id: 1, PhoneName: "IPohneX", PhonePrice: 23000, Description: "This is very good mobile phone", ImageUrl: "assets/download.jpg" },
    { "Id": 2, "PhoneName": "Samsung Galaxy S22", "PhonePrice": 999, "Description": "The latest flagship from Samsung with cutting-edge features.", "ImageUrl": "assets/samsung.jpg" },
    { "Id": 3, "PhoneName": "Google Pixel 7", "PhonePrice": 899, "Description": "Google's latest Pixel offering with exceptional camera capabilities.", "ImageUrl": "assets/googlepixel.webp" },
    { "Id": 4, "PhoneName": "iPhone 14", "PhonePrice": 1299, "Description": "Apple's newest iPhone featuring advanced technology and sleek design.", "ImageUrl": "assets/iphone14.jpg" },
    { "Id": 5, "PhoneName": "OnePlus 10", "PhonePrice": 899, "Description": "OnePlus's latest flagship device with top-of-the-line performance.", "ImageUrl": "assets/oneplus.webp" },
    { "Id": 6, "PhoneName": "Xiaomi Mi 12", "PhonePrice": 799, "Description": "Xiaomi's flagship offering featuring innovative features and design.", "ImageUrl": "assets/xiaomi.jpg" },
    { "Id": 7, "PhoneName": "Sony Xperia 5 III", "PhonePrice": 899, "Description": "Sony's latest Xperia device known for its exceptional display and camera.", "ImageUrl": "assets/sony.jpg" },
    { "Id": 8, "PhoneName": "Huawei P50 Pro", "PhonePrice": 1099, "Description": "Huawei's flagship device with cutting-edge camera technology and design.", "ImageUrl": "assets/huawei.jpg" },
    { "Id": 9, "PhoneName": "Motorola Edge X30", "PhonePrice": 799, "Description": "Motorola's latest flagship device with powerful performance and 5G capabilities.", "ImageUrl": "assets/moto.png" },
    { "Id": 10, "PhoneName": "Realme GT 2 Pro", "PhonePrice": 699, "Description": "Realme's flagship offering with impressive performance and features.", "ImageUrl": "assets/realme.jpg" },
    { "Id": 11, "PhoneName": "Nokia X100", "PhonePrice": 499, "Description": "Nokia's latest budget-friendly smartphone with reliable performance.", "ImageUrl": "assets/nokia.jpg" },
    { "Id": 12,"PhoneName": "Oppo Reno 3 Pro","PhonePrice": 499,"Description": "Oppo's Reno 3 Pro features a stunning design with a quad-camera setup and a vibrant AMOLED display.","ImageUrl": "assets/oppo.jpg"}
];
