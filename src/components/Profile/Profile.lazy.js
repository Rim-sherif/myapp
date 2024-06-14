//  {/* <div className="col-sm-4 profile-social">
//                     <ul className="fa-ul">
//                       <li>
//                         <i className="fa-li fab fa-twitter-square "></i>
//                         <Link className="a" href="#">
//                           @scjohansson
//                         </Link>
//                       </li>
//                       <li>
//                         <i className="fa-li fab fa-linkedin"></i>
//                         <Link className="a" href="#">
//                           John Doe
//                         </Link>
//                       </li>
//                       <li>
//                         <i className="fa-li fab fa-facebook-square"></i>
//                         <Link className="a" href="#">
//                           John Doe
//                         </Link>
//                       </li>
//                       <li>
//                         <i className="fa-li fab fa-skype"></i>
//                         <Link className="a" href="#">
//                           Black_widow
//                         </Link>
//                       </li>
//                       <li>
//                         <i className="fa-li fab fa-instagram"></i>
//                         <Link className="a" href="#">
//                           Avenger_Scarlett
//                         </Link>
//                       </li>
//                     </ul>
//                   </div> */}


// {/* <div className="profile-message-btn center-block text-center">
//                   <Link href="#" className="btn btn-success">
//                     <i className="fa fa-envelope"></i> Send message
//                   </Link>
//                 // </div> */}
// {/* <div className="media-container">
//                     {!editMode && (
//                       <div className="media-overlay">
//                         <input
//                           type="file"
//                           id="media-input"
//                           accept="image/*"
//                           onChange={handleImageChange}
//                         />
//                         <i className="an an-write media-icon"></i>
//                       </div>
//                     )}
//                     <figure className="media-object">
//                       <img className="img-object" src={imageSrc} alt="" />
//                     </figure>
//                   </div>
//                   <div className="media-control">
//                     {editMode ? (
//                       <button className="bt" onClick={handleEditClick}>
//                         <i className="an an-write"></i>Upload Photo
//                       </button>
//                     ) : (
//                       <button
//                         className="btn save-profile"
//                         onClick={handleSaveClick}
//                       >
//                         <i className="an an-save"></i>Save
//                       </button>
//                     )}
//                   </div>                   */}
  // const [editMode, setEditMode] = useState(true);
  // const [imageSrc, setImageSrc] = useState(
  //   "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
  // );

  // const handleEditClick = () => {
  //   setEditMode(false);
  // };

  // const handleSaveClick = () => {
  //   setEditMode(true);
  // };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];

  //   if (file) {
  //     const reader = new FileReader();

  //     reader.onload = (event) => {
  //       setImageSrc(event.target.result);
  //     };

  //     reader.readAsDataURL(file);
  //   }
  // };
  // import React, { useState } from "react";

// function Profile() {
//   // Define state variables for user information
//   const [name, setName] = useState("John Doe");
//   const [email, setEmail] = useState("johndoe@bootdey.com");
//   const [phoneNumber, setPhoneNumber] = useState("011 223 344 556 677");
//   const [imageUrl, setImageUrl] = useState("https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp");

//   // State variable for toggling edit mode
//   const [editMode, setEditMode] = useState(false);

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can perform actions like updating the user's information in the database
//     setEditMode(false);
//   };

//   return (
//     <div className="container">
//       <div className="admin-profile mt-5">
//         <div className="container p-5 bg-white">
//           <div className="row" id="user-profile">
//             <div className="col-lg-3 col-md-4 col-sm-4 h-100vh">
//               <div className="main-box left-side-profile">
//                 <h2>{name}</h2>
//                 {/* Add Online status here */}
//                 <div className="flex-shrink-0">
//                   <img
//                     src={imageUrl}
//                     alt=""
//                     className="img-fluid"
//                     style={{ width: "190px", borderRadius: "10px" }}
//                   />
//                   <div className="profile-details">
//                     <ul className="fa-ul">
//                       {/* Display user's orders and posts here */}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-9 col-md-8 col-sm-4">
//               <div className="main-box clearfix">
//                 <div className="profile-header">
//                   <h3>
//                     <span>Admin info</span>
//                   </h3>
//                   {/* Toggle edit mode button */}
//                   <button
//                     className="btn btn-primary edit-profile"
//                     onClick={() => setEditMode(true)}
//                   >
//                     <i className="fa fa-pencil-square fa-lg"></i> Edit profile
//                   </button>
//                 </div>

//                 <div className="row profile-user-info">
//                   <div className="col-sm-8">
//                     <form onSubmit={handleSubmit}>
//                       {/* Name input */}
//                       <div className="form-group">
//                         <label>Name</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           value={name}
//                           onChange={(e) => setName(e.target.value)}
//                           disabled={!editMode}
//                         />
//                       </div>
//                       {/* Email input */}
//                       <div className="form-group">
//                         <label>Email</label>
//                         <input
//                           type="email"
//                           className="form-control"
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                           disabled={!editMode}
//                         />
//                       </div>
//                       {/* Phone number input */}
//                       <div className="form-group">
//                         <label>Phone Number</label>
//                         <input
//                           type="tel"
//                           className="form-control"
//                           value={phoneNumber}
//                           onChange={(e) => setPhoneNumber(e.target.value)}
//                           disabled={!editMode}
//                         />
//                       </div>
//                       {/* Image URL input */}
//                       <div className="form-group">
//                         <label>Image URL</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           value={imageUrl}
//                           onChange={(e) => setImageUrl(e.target.value)}
//                           disabled={!editMode}
//                         />
//                       </div>
//                       {/* Social accounts inputs */}
//                       {/* Add social accounts editing here if needed */}
//                       {/* Submit button */}
//                       {editMode && (
//                         <button type="submit" className="btn btn-primary">
//                           Save
//                         </button>
//                       )}
//                     </form>
//                   </div>
//                   <div className="col-sm-4 profile-social">
//                     {/* Display social accounts here */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;