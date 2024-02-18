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
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Card 1 */}
  <div className="card w-full sm:w-full md:w-full lg:w-full bg-base-100 shadow-xl m-5">
    <figure>
      <img src="https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg" alt="Tanay" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Tanay Shah</h2>
      <p>President</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={() => openModal('my_modal_1')}>View More</button>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Tanay Shah</h3>
          <p className="py-4">Tanay Shah is a 10th grader at Del Norte High School, San Diego. While other 4-year olds wanted to be Superman or Spiderman, Tanay wanted to be "All The Mans"! This thirst for trying and learning new things has led Tanay to tinker with various interests ranging from robotics to hip-hop dance to piano (that last one didn't quite pan out :-) ). He has won several State and Regional awards with First Lego League and VexIQ robotics competitions and has been invited to be a keynote speaker for Altitude Learning and the D39X Educational Summit. He balances his interests with wanting to help his friends and his school get to the next level, especially through the current pandemic. And so, being a Student Ambassador with Thrively is a natural fit for Tanay. This combines his passions for technology, new-age learning, and advocating for student agency into one neat package. In the years to come, Tanay hopes to be a roboticist or an entrepreneur. In his spare time, Tanay likes to play football, golf, and video games! His favorite tag line - Carpe Diem!!  </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary" onClick={() => closeModal('my_modal_1')}>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  </div>

  {/* Card 2 */}
  <div className="card w-full sm:w-full md:w-full lg:w-full bg-base-100 shadow-xl m-5">
    <figure>
      <img src="https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg" alt="Srijan" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Srijan Atti</h2>
      <p>Vice President</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={() => openModal('my_modal_2')}>View More</button>
      </div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Srijan Atti</h3>
          <p className="py-4">Vice President</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary" onClick={() => closeModal('my_modal_2')}>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  </div>

  {/* Card 3 */}
  <div className="card w-full sm:w-full md:w-full lg:w-full bg-base-100 shadow-xl m-5">
    <figure>
      <img src="https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg" alt="Imaad" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Imaad Muzaffer</h2>
      <p>Technology Lead</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={() => openModal('my_modal_3')}>View More</button>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Imaad Muzaffer</h3>
          <p className="py-4">Technology Lead</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary" onClick={() => closeModal('my_modal_3')}>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  </div>

  {/* Card 4 */}
  <div className="card w-full sm:w-full md:w-full lg:w-full bg-base-100 shadow-xl m-5">
    <figure>
      <img src="https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg" alt="Kiana" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Kiana Withee</h2>
      <p>Outreach?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={() => openModal('my_modal_4')}>View More</button>
      </div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Kiana Withee</h3>
          <p className="py-4">Outreach?</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary" onClick={() => closeModal('my_modal_4')}>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  </div>

  {/* Card 5 */}
  <div className="card w-full sm:w-full md:w-full lg:w-full bg-base-100 shadow-xl m-5">
    <figure>
      <img src="https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg" alt="Sameeksha" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Sameeksha Vashishta</h2>
      <p>Outreach Lead</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={() => openModal('my_modal_5')}>View More</button>
      </div>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Sameeksha Vashishta</h3>
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
  {/* Card 6 */}
<div className="card w-full sm:w-full md:w-full lg:w-full bg-base-100 shadow-xl m-5">
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
      <div className="modal-box">
        <h3 className="font-bold text-lg">Ananya Asudani</h3>
        <p className="py-4">Treasurer</p>
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



