// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux"
// import { useHistory, Redirect } from 'react-router-dom';
// // import { captureOrder } from '../store/advisor';

// const CreateOrder = () => {
//     const [cover_options, setCoverOptions] = useState("");
//     const [genre_options, setGenreOptions] = useState("");
//     const [author_options, setAuthorOptions] = useState("");
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const advisor = useSelector(state => state.session.advisor);
//     // const reader_id = reader.id
//     const reader = useSelector(state => state.session.reader);
//     const product = useSelector(state => state.product);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const advisor_id = advisor.id
//         const reader_id = reader.id
//         const product_id = product.id
//         const orderPayload = {
//             cover_options,
//             genre_options,
//             author_options,
//             reader_id,
//             advisor_id,
//             product_id
//         }
//         // console.log('&&&&&&&&&&&&&&&&&', reader.id)
//         await dispatch(captureOrder(orderPayload))
//         history.push(`/orders`)

//     };

//     const createCoverOptions = (e) => {
//         setCoverOptions(e.target.value);
//     };

//     const createSetGenreOptions = (e) => {
//         setGenreOptions(e.target.value);
//     };

//     const createSetAuthorOptions = (e) => {
//         setAuthorOptions(e.target.value);
//     };

//     if (!advisor) {
//         return <Redirect to='/advisor-login' />;
//     }

//     return (
//         <div id="create-order-container">
//             <form id="create-order-contents" onSubmit={handleSubmit}>
//                 <h3 id="create-order-header">Create Order</h3>
//                 <div className="create-order-list-div">
//                     <label className="create-order-list-items">Please select cover types</label>
//                     {['Hardcover', 'Paperback', 'No Preference'].map((choice) => (
//                         <>
//                             <input className="create-order-inputs"
//                                 id={choice}
//                                 type="radio"
//                                 name="cover_choices"
//                                 onChange={createCoverOptions}
//                                 value={choice}
//                                 required={true}
//                             ></input>
//                             <label htmlFor={choice}>{choice}</label>
//                         </>
//                     ))}
//                 </div>
//                 <div className="create-order-list-div">
//                     <label className="create-order-list-items">Please select genres</label>
//                     {['Biography', 'Classic Literature', 'Contemporary Literature', 'Crime', 'Fantasy', 'Graphic Novels & Comics', 'LGBTQ+ Fiction', 'Historical Fiction', 'Horror', 'Humor & Comedy', 'Memoir', 'Mystery', 'Nonfiction', 'Paranormal', 'Philosophical', 'Poetry', 'Pulp Fiction', 'Romance', 'Science Fiction', 'Speculative Fiction', 'Suspense', 'Thriller', 'Young Adult'].map((genre) => (
//                         <>
//                             <input className="create-order-text"
//                                 type="checkbox"
//                                 name="genre_choices"
//                                 onChange={createSetGenreOptions}
//                                 value={genre}
//                                 required={true}
//                             ></input>
//                             <label htmlFor={genre}>{genre}</label>
//                         </>
//                     ))}
//                 </div>
//                 <div className="create-order-list-div">
//                     <label className="create-order-list-items">Please list some authors you like, separated by commas</label>
//                     <textarea className="create-order-text"
//                         // type="text"
//                         name="author_choices"
//                         onChange={createSetAuthorOptions}
//                         value={author_options}
//                         placeholder="For example: Ursula K. Le Guin, bell hooks, A.K.R. Scott"
//                         required={true}
//                     />
//                 </div>
//                 <button id="create-preferences-btn" type="submit">Submit this order!</button>
//             </form>
//         </div>
//     );
// };

// export default CreateOrder;
