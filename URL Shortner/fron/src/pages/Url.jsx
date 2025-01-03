import React, { useState } from "react";
import axios from "axios";
import UseFetch from "../hooks/UseFetch";
import { Backendurl } from "../config";
import Header from "../components/Header";
import { useSelector } from "react-redux";

function Url() {
  const isAuthenticated = useSelector((state) => state.UserAuth.isAuthenticated);

  const [short, setShort] = useState();
  const [org, setOrg] = useState("");

  const { data, loading, err, refetch } = UseFetch(`${Backendurl}/url`);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${Backendurl}/url`, { url: org });
      setShort(response.data);
      setOrg(""); // Clear the input field after submission
      refetch(); // Trigger refetch to update the list
    } catch (error) {
      console.log("Error generating short URL", error);
    }
  };

  const handleDelete = async (e) => {
    const id = e.target.value;
    try {
      await axios.delete(`${Backendurl}/url/${id}`);
      refetch(); // Trigger refetch to update the list
    } catch (error) {
      console.log("Error in deleting:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (err) return <div>Error: {err}</div>;

  if (isAuthenticated) {
    return (
      <div className="space-y-20">
        <Header />

        <div className="bg-slate-300 p-5 w-max">
          <form className="space-x-4" onSubmit={handleSubmit}>
            <label className="text-gray-600">Enter your Original URL:</label>
            <input
              type="text"
              placeholder="https://example.com"
              className="p-2 rounded-2xl w-60"
              value={org}
              onChange={(e) => setOrg(e.target.value)}
            ></input>
            <button className="bg-red-600 p-2 rounded-3xl text-white" type="submit">
              Generate
            </button>
          </form>
          {short ? (
            <a href={`http://localhost:500/url/${short.id}`} target="_blank" rel="noopener noreferrer">
              <h1>Your Short URL is:</h1>
              <h1 className="hover:text-blue-600">{`http://localhost:500/url/${short.id}`}</h1>
            </a>
          ) : null}
        </div>

        <table className="min-w-full table-auto text-left border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-teal-500 to-blue-600 text-white">
              <th className="px-6 py-4 text-lg font-semibold">S No</th>
              <th className="px-6 py-4 text-lg font-semibold">ShortID</th>
              <th className="px-6 py-4 text-lg font-semibold">Redirect URL</th>
              <th className="px-6 py-4 text-lg font-semibold">Click Count</th>
              <th className="px-6 py-4 text-lg font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ur, index) => {
              const linurl = `http://localhost:500/url/${ur.shortId}`;
              return (
                <tr
                  key={index}
                  className="transition-all duration-300 ease-in-out transform hover:scale-102 hover:bg-indigo-50"
                >
                  <td className="px-6 py-4 border-b text-gray-800">{index + 1}</td>
                  <td className="px-6 py-4 border-b text-gray-800 font-medium hover:text-blue-500">
                    <a href={linurl}>{Backendurl}/{ur.shortId}</a>
                  </td>
                  <td className="px-6 py-4 border-b text-gray-800">{ur.redirectURL}</td>
                  <td className="px-6 py-4 border-b text-gray-800">{ur.VisitHistory.length}</td>
                  <td className="px-6 py-4 border-b text-gray-800">
                    <button
                      className="bg-red-500 p-2 rounded-3xl text-white hover:bg-red-600"
                      value={ur.shortId}
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
}

export default Url;
