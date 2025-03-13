'use client';

import Categories from "./components/Categories/Categories";
import Meals from "./components/Meals/Meals";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import TopHeader from "./components/TopHeader/TopHeader";


export default function Home() {


  return (
    <div>
      <TopHeader />
      <Header />
      <Categories />
      <Banner />
      <Meals />
      <BottomNavbar />

    </div>
  );
}
