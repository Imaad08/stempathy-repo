"use client";
import React from 'react';
import BuyButtonComponent from './BuyButton';
const Cards = () => {
  const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  };

  return (
    // im too lazy to make it an array so theres that
<div className="grid grid-cols-1 text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Card 1(Tanay) */}
  <div className="card w-full sm:w-full md:w-full lg:w-full bg-gray-800 shadow-xl m-5">
    <figure>
      <img src="/assets/tanaypfp.jpg" alt="Tanay" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Tanay Shah</h2>
      <p>President</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={() => openModal('my_modal_1')}>View More</button>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-gray-800">
          <h3 className="font-bold text-lg">Tanay Shah</h3>
          <p className="py-4">Tanay Shah is an 11th grader at Del Norte High School, San Diego. While other 4-year olds wanted to be Superman or Spiderman, Tanay wanted to be "All The Mans"! This thirst for trying and learning new things has led Tanay to tinker with various interests ranging from robotics to hip-hop dance to piano (that last one didn't quite pan out :-) ). He has won several State and Regional awards with First Lego League and VexIQ robotics competitions and has been invited to be a keynote speaker for Altitude Learning and the D39X Educational Summit. He balances his interests with wanting to help his friends and his school get to the next level, especially through the current pandemic. And so, being a Student Ambassador with Thrively is a natural fit for Tanay. This combines his passions for technology, new-age learning, and advocating for student agency into one neat package. In the years to come, Tanay hopes to be a roboticist or an entrepreneur. In his spare time, Tanay likes to play football, golf, and video games! His favorite tag line - Carpe Diem!!  </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary" onClick={() => closeModal('my_modal_1')}>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  </div>

  {/* Card 2(Srijan) */}
  <div className="card w-full sm:w-full md:w-full text-white lg:w-full bg-gray-800 shadow-xl m-5">
    <figure>
      <img src="/assets/srijanpfp.jpeg" alt="Srijan" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Srijan Atti</h2>
      <p>Vice President</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={() => openModal('my_modal_2')}>View More</button>
      </div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-gray-800">
          <h3 className="font-bold text-lg">Srijan Atti</h3>
          <p className="py-4">Srijan Atti is an 11th grader at Del Norte High School with a love for all things STEM. His passion for the field originated early on after watching the Iron Man movies; seeing Tony Stark make the Mark I suit with his bare hands inspired Srijan and opened his eyes to the possibilities that STEM opens. His passions grew as he interacted with computer science, robotics, and more sciences. His passions have culminated in numerous awards in cyber security competitions including National Champion of the CyberPatriot competition, two time SoCal Cyber Cup winner, and Space Grand Challenge winner. He hopes to spread his passion for the field and inspire kids in the same way Tony Stark inspired him.</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary" onClick={() => closeModal('my_modal_2')}>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  </div>

  {/* Card 3(Imaad) */}
  <div className="card w-full sm:w-full md:w-full text-white lg:w-full bg-gray-800 shadow-xl m-5">
    <figure>
      <img src="/assets/imaadpfp.jpg" alt="Imaad" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Imaad Muzaffer</h2>
      <p>Technology Lead</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={() => openModal('my_modal_3')}>View More</button>
      </div>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box bg-gray-800">
          <h3 className="font-bold text-lg">Imaad Muzaffer</h3>
          <p className="py-4">Imaad Muzaffer is a dedicated computer scientist currently an 11th grader attending Del Norte High School in San Diego, CA. With a strong academic record and a passion for computer science, Imaad has demonstrated leadership as the President & Founder of the Del Norte High School Technology Student Association and President of Coding4Kidz. His skills encompass various programming languages and technologies, including Python, Unity Game Development, and web development with React, Typescript, and Tailwind. Additionally, he has engaged in extracurricular activities such as robotics at his school and has a keen interest in Artificial Intelligence/Machine Learning.</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary" onClick={() => closeModal('my_modal_3')}>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  </div>

  {/* Card 4(Kiana) */}
  <div className="card w-full sm:w-full md:w-full text-white lg:w-full bg-gray-800 shadow-xl m-5">
    <figure>
      <img src="https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg" alt="Kiana" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Kiana Withee</h2>
      <p>Assistant Outreach Lead</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={() => openModal('my_modal_4')}>View More</button>
      </div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box bg-gray-800">
          <h3 className="font-bold text-lg">Kiana Withee</h3>
          <p className="py-4">Assistant Outreach Lead</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary" onClick={() => closeModal('my_modal_4')}>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  </div>

  {/* Card 5(Sameeksha) */}
  <div className="card w-full sm:w-full md:w-full text-white lg:w-full bg-gray-800 shadow-xl m-5">
    <figure>
      <img src="https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg" alt="Sameeksha" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Sameeksha Vashishtha</h2>
      <p>Outreach Lead</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={() => openModal('my_modal_5')}>View More</button>
      </div>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box bg-gray-800">
          <h3 className="font-bold text-lg">Sameeksha Vashishtha</h3>
          <p className="py-4">Outread Lead</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary" onClick={() => closeModal('my_modal_5')}>Close</button>
            </form>
          </div>
        </div>
      </dialog>

      
      
    </div>
    
  </div>
  {/* Card 6(Ananya) */}
<div className="card w-full sm:w-full md:w-full text-white lg:w-full bg-gray-800 shadow-xl m-5">
  <figure>
    <img src="https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg" className='h-30 w-30' alt="Ananya" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Ananya Asudani</h2>
    <p>Treasurer</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={() => openModal('my_modal_6')}>View More</button>
    </div>
    <dialog id="my_modal_6" className="modal">
      <div className="modal-box bg-gray-800">
        <h3 className="font-bold text-lg">Ananya Asudani</h3>
        <p className="py-4">Ananya Asudani is an 11th grader in Del Norte High School San Diego California. She enjoys all things STEM, her specialty being biology. Ever since she was a kid she enjoyed learning about genes, genetics, and cellular biology. This interest led to her writing a children’s book about genetics called “Jackets and Genes.” I enjoy doing research as well as reading up on new treatments and therapeutics that can potentially benefit a plethora of diseases and disorders in the future. It is my goal and aspiration to create equity and enable students to have opportunities to do research! In my free time I love painting, teaching, and listening to music!</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-primary" onClick={() => closeModal('my_modal_6')}>Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</div>


</div>



  );
};

export default Cards;




// Different card approach but has scaling issues.
// Will work on later in order to reduce complexity and program length
// ABSTRACTION IS KEY (Insert Nerd Emoji)

// "use client";
// import React from 'react';
// import BuyButtonComponent from './BuyButton';

// const cardDetails = [
//   {
//     id: 1,
//     name: 'Tanay Shah',
//     role: 'President',
//     image: 'https://i.ibb.co/HC6T4hQ/IMG-5455.jpg',
//     description:
//       'Tanay Shah is a 10th grader at Del Norte High School, San Diego. While other 4-year olds wanted to be Superman or Spiderman, Tanay wanted to be "All The Mans"! This thirst for trying and learning new things has led Tanay to tinker with various interests ranging from robotics to hip-hop dance to piano (that last one didn\'t quite pan out :-) ). He has won several State and Regional awards with First Lego League and VexIQ robotics competitions and has been invited to be a keynote speaker for Altitude Learning and the D39X Educational Summit. He balances his interests with wanting to help his friends and his school get to the next level, especially through the current pandemic. And so, being a Student Ambassador with Thrively is a natural fit for Tanay. This combines his passions for technology, new-age learning, and advocating for student agency into one neat package. In the years to come, Tanay hopes to be a roboticist or an entrepreneur. In his spare time, Tanay likes to play football, golf, and video games! His favorite tag line - Carpe Diem!!',
//   },
//   {
//     id: 2,
//     name: 'Srijan Atti',
//     role: 'Vice President',
//     image: 'https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg',
//     description: 'Vice President',
//   },
//   {
//     id: 3,
//     name: 'Imaad Muzaffer',
//     role: 'Technology Lead',
//     image: 'https://i.ibb.co/1ZfvfKL/1f08d5eb-3169-42c3-9a71-3c4ec5a6916d-2.jpg',
//     description: 'Technology Lead',
//   },
//   {
//     id: 4,
//     name: 'Kiana Withee',
//     role: 'Assistant Outreach Lead',
//     image: 'https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg',
//     description: 'Assistant Outreach Lead',
//   },
//   {
//     id: 5,
//     name: 'Sameeksha Vashishta',
//     role: 'Outreach Lead',
//     image: 'https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg',
//     description: 'Outread Lead',
//   },
//   {
//     id: 6,
//     name: 'Ananya Asudani',
//     role: 'Treasurer',
//     image: 'https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg',
//     description: 'Treasurer',
//   },
// ];


// const Cards = () => {
//   const openModal = (modalId: string) => {
//     const modal = document.getElementById(modalId) as HTMLDialogElement;
//     if (modal) {
//       modal.showModal();
//     }
//   };

//   const closeModal = (modalId: string) => {
//     const modal = document.getElementById(modalId) as HTMLDialogElement;
//     if (modal) {
//       modal.close();
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {cardDetails.map((card) => (
//         <div key={card.id} className="card w-full sm:w-full md:w-full lg:w-full bg-base-100 shadow-xl m-5">
//           <figure>
//             <img src={card.image} alt={card.name} />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">{card.name}</h2>
//             <p>{card.role}</p>
//             <div className="card-actions justify-end">
//               <button className="btn btn-primary" onClick={() => openModal(`my_modal_${card.id}`)}>
//                 View More
//               </button>
//             </div>
//             <dialog id={`my_modal_${card.id}`} className="modal">
//               <div className="modal-box">
//                 <h3 className="font-bold text-lg">{card.name}</h3>
//                 <p className="py-4">{card.description}</p>
//                 <div className="modal-action">
//                   <form method="dialog">
//                     <button className="btn btn-primary" onClick={() => closeModal(`my_modal_${card.id}`)}>
//                       Close
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </dialog>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;
