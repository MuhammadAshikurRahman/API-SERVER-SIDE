const express = require('express'); // এক্সপ্রেস লাইব্রেরি ইম্পোর্ট
const app = express(); // এক্সপ্রেস অ্যাপ তৈরি
const cors = require('cors'); // ক্রস-অরিজিন রিকোয়েস্ট হ্যান্ডেল করার জন্য

// CORS ম্যানেজ করার জন্য মিডলওয়্যার ব্যবহার
app.use(cors());

// JSON ডেটা পার্স করার জন্য মিডলওয়্যার
app.use(express.json());

// ভেজিটেবল লিস্ট (ডেটা)
const vegList = [
    { id: 1, name: 'Apple', color: 'Green', price: 100 },
    { id: 2, name: 'Banana', color: 'Yellow', price: 50 },
    { id: 3, name: 'Carrot', color: 'Orange', price: 40 },
    { id: 4, name: 'Spinach', color: 'Green', price: 30 },
    { id: 5, name: 'Tomato', color: 'Red', price: 60 }
];

// সব ভেজিটেবলের ডেটা দেখানোর জন্য রাউট
app.get('/veg', (req, res) => {
    res.send(vegList); // পুরো লিস্ট রেসপন্স হিসেবে পাঠানো
});


// নির্দিষ্ট ভেজিটেবল দেখানোর জন্য রাউট (ID অনুযায়ী) ,Dynamic 
app.get('/veg/:id', (req, res) => {
    const id = parseInt(req.params.id); // URL থেকে ID সংগ্রহ করা
    const veg = vegList.find(item => item.id === id); // ID অনুযায়ী ডেটা খুঁজে বের করা
    res.send(veg); // খুঁজে পাওয়া ডেটা রেসপন্স হিসেবে পাঠানো
});

// নতুন ভেজিটেবল যোগ করার জন্য POST রাউট
app.post('/addVeg', (req, res) => {
    const newVeg = req.body; // ক্লায়েন্ট থেকে প্রাপ্ত ডেটা
    newVeg.id = vegList.length + 1; // নতুন ভেজিটেবলের ID অটো ইনক্রিমেন্ট
    vegList.push(newVeg); // লিস্টে নতুন ভেজিটেবল যোগ করা
    res.send(newVeg); // নতুন যোগ হওয়া ভেজিটেবল রেসপন্স হিসেবে পাঠানো
});

// সার্ভার স্টার্ট করা
app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000'); // সার্ভার ঠিকমতো চলছে কিনা চেক
});
