// import React from "react";
// import { useState } from "react";
// import data from "/Users/ajibolaokungbaye/static-job-listing/src/data.json";

// function JobCard({ jobs, clear }) {
//   const [jobData, setJobData] = useState(jobs);
//   const [filterArr, setFilterArr] = useState([]);

//   const JobCardList = jobData.map((item) => {
//     let itemArray = [item.level, ...item.languages, ...item.tools];

//     // console.log(filterArr);

//     const handleClick = (item) => {
//       console.log(item);
//       setFilterArr((prev) => [...prev, item]);

//       const newItem = data.filter((i) => {
//         return (
//           i.languages.includes(item) ||
//           i.tools.includes(item) ||
//           i.level.includes(item)
//         );
//       });

//       setJobData(newItem);
//     };

//     console.log();

//     return (
//       <article className="card" key={item.id}>
//         <div className="card-container">
//           <div className="container-first-section">
//             <div className="logo">
//               <img src={item.logo} alt="" />
//             </div>
//             <div className="company--jobtags">
//               <p className="company">{item.company}</p>
//               <div className="jobtags">
//                 {item.new && (
//                   <div className="newtag">
//                     <p className="new tag">New!</p>
//                   </div>
//                 )}
//                 {item.featured && (
//                   <div className="featuretag">
//                     <p className="featured tag">featured</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="position">
//               <p>{item.position}</p>
//             </div>
//             <div className="date--location">
//               <p>{item.postedAt}</p>
//               <span></span>
//               <p> {item.contract} </p>
//               <span></span>
//               <p> {item.location} </p>
//             </div>
//           </div>
//           <div className="container-second-section">
//             {itemArray.map((item) => {
//               return (
//                 <button key={nanoid()} onClick={() => handleClick(item)}>
//                   {item}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </article>
//     );
//   });
//   return <div>{JobCardList}</div>;
// }

// export default JobCard;
