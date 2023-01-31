import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { BiEdit, BiFileBlank, BiPlus, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import Loading from "../Loading";

function SubCategories() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [categoriesData, setCategoriesData] = useState([]);

  const fetchCategories = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        let categoryData = response.data;
        let newCategoryData = categoryData.map((cat, index) => {
          return {
            id: index + 1,
            title: cat,
            category_name: cat,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          };
        });
        setCategoriesData(newCategoryData);
        setIsLoaded(false);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, [isLoaded]);

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      {isLoaded == true ? (
        <Loading />
      ) : (
        <div className="card">
          <div className="card-header d-flex align-items-center justify-content-between">
            <h5 className="card-title m-0 me-2">
              <BiFileBlank /> Sub Categories
            </h5>
            <div>
              <Link to="/main-categories/add" className="btn btn-primary">
                <BiPlus /> Add New
              </Link>
            </div>
          </div>
          <div className="card-body">
            <table className="table table-bordered custom-table">
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Sub Category</th>
                  <th>Category Name</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {categoriesData.length > 0 ? (
                  categoriesData.map((category) => {
                    return (
                      <tr key={category.id}>
                        <td>{category.id}</td>
                        <td>{category.title}</td>
                        <td>{category.category_name}</td>
                        <td>{category.description}</td>
                        <td>
                          <button className="btn btn-warning btn-sm me-1">
                            <BiEdit />
                          </button>
                          <button className="btn btn-danger btn-sm">
                            <BiTrash />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="4">No records are available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubCategories;
