"use client"
import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const DataContext = createContext();



export const DataProvider = ({ children }) => {



    const [categories, setCategories] = useState([])
    const [meals, setMeals] = useState([])
    const [offers, setOffers] = useState([])
    const [tableNo, setTableNo] = useState(0);
    const [setting,setSetting]=useState();




    // *************************************** fetch categories start *******************************************
    const fetchCategories = async () => {
        try {
           
            const response = await fetch('/api/categories', {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                }
            })
            const data = await response.json();
            setCategories(data);

        } catch (error) {
            console.log("Error Fetching Categories", error);
        }
    }
    // *************************************** fetch categories End *******************************************





    // *************************************** fetch Meals start *******************************************
    const fetchMeals = async () => {
        try {
            
            const response = await fetch('/api/meals', {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                }
            })
            const data = await response.json();
            setMeals(data);
        } catch (error) {
            console.log("Error Fetching Meals", error);
        }
    }
    // *************************************** fetch Meals End *******************************************




    // *************************************** fetch offers start *******************************************
    const fetchOffers = async () => {
        try {
            const response = await axios.get('/api/offers',{
                headers: {
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                }
            });
            setMeals(response.data);
        } catch (error) {
            console.log("Error Fetching offers", error);
        }
    }
    // *************************************** fetch Meals End *******************************************



    // *************************************** fetch setting start *******************************************

    const fetchSetting = async () => {
        try {
            const response = await axios.get('/api/setting',{
                headers: {
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                }
            });
            setSetting(response.data);
           
        } catch (error) {
            console.log("Error Fetching offers", error);
        }
    }
    // *************************************** fetch setting End *******************************************






    useEffect(() => {
        fetchCategories();
        fetchMeals();
        fetchOffers();
        fetchSetting();
    }, []);




    return (
        <DataContext.Provider 
            value=
            {{ categories, fetchCategories, meals, fetchMeals, offers, fetchOffers,tableNo,setTableNo,setting,fetchSetting }}>
            {children}
        </DataContext.Provider>
    )
};