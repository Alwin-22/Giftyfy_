import React from 'react';
import './styles.css';
import { FaBirthdayCake, FaGift, FaUserAlt, FaHeart } from 'react-icons/fa';
import {GiFlowerPot} from 'react-icons/gi'
import {GiCakeSlice} from 'react-icons/gi'
import {SlNote} from 'react-icons/sl'
import {GiGlassCelebration} from 'react-icons/gi'
import {HiCake} from 'react-icons/hi'
import woman from "../../Assets/woman.jpg"
import man from "../../Assets/man.png"
import kids from "../../Assets/kids.jpg"




const categories = [
  { title: 'Birthday Gifts', icon: <HiCake /> },
  { title: 'Anniversary Gifts', icon: <GiGlassCelebration /> },
  { title: 'Personalized Gifts', icon: <SlNote /> },
  { title: 'Flowers', icon: <GiFlowerPot /> },
  { title: 'Cakes', icon: <GiCakeSlice /> },
];

const subcategories = [
  {
    title: 'Gifts for Women',
    items: [
      'Wife',
      'Girlfriend',
      'Mother',
      'Sister',
      'Daughter',
      'Friend',
      'Grandmother',
    ],
  },
  {
    title: 'Gifts for Men',
    items: [
      'Husband',
      'Boyfriend',
      'Father',
      'Brother',
      'Son',
      'Friend',
      'Grandfather',
    ],
  },
  {
    title: 'Gifts for Kids and Infants',
    items: [
      'Girls (3 years)',
      'Girls (6 years)',
      'Girls (12 years)',
      'Boys (3 years)',
      'Boys (6 years)',
      'Boys (12 years)',
    ],
  },
];

function CategoryPage() {
  return (
    <div className="category">
      
      <div className="category-header">
        {/* <div className="category-title">Categories:</div> */}
        <div className="category-list">
          <ul>
            {categories.map((category) => (
              <li key={category.title}>
                <a href="/">
                  {category.icon} {category.title}
                  {/* <i class="fa-sharp fa-regular fa-people"></i> */}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="category-body">
   
        {subcategories.map((subcategory,index) => (
          <div className="category-column" key={subcategory.title}>
            {index==0?<img src={woman} alt='woman image' width="100px"></img>:null}
            {index==1?<img src={man} alt='man image' width="100px"></img>:null}
            {index==2?<img src={kids} alt='kids image' width="120px"></img>:null}
            <div className="category-subtitle">{subcategory.title}</div>
            <ul>
              {subcategory.items.map((item) => (
                <li key={item}>
                  <a href="/">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;

