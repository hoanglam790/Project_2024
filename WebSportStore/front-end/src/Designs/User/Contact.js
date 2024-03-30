import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Header from '../../Components/header_1'
import Footer from '../../Components/footer'
import getAPI from '../../Api/ApiClient';

const Contact = () => {
  const [cate, setCate] = useState([]);

  useEffect(() => {
    async function fetchData(id) {
      const req = await axios.get('http://localhost:5050/api/Category');
      console.log(req.data);
      setCate(req.data.data);
      return req;
    }
    fetchData();
  }, []);

  return (
    <>
    <Header />
      <section className="relative bg-white py-16 px-4">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4207676358483!2d106.78253487480617!3d10.855566889298087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276e7ea103df%3A0xb6cf10bb7d719327!2zSFVURUNIIC0gxJDhuqFpIGjhu41jIEPDtG5nIG5naOG7hyBUUC5IQ00gKFRodSBEdWMgQ2FtcHVzKQ!5e0!3m2!1svi!2s!4v1708516740647!5m2!1svi!2s" width="100%" height="600" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div className="container mx-auto">       
          <div className="mx-auto w-full px-4 py-28 text-center lg:w-6/12">
            <p className="font-sans text-xl leading-relaxed text-inherit font-semibold">
              Co-Working
            </p>
            <h2 className="font-sans text-4xl font-bold leading-[1.3] text-blue-gray-900 my-3">
              Build something
            </h2>
            <p className="font-sans text-xl font-normal leading-relaxed text-blue-gray-500">
              Put the potentially record low maximum sea ice extent tihs year down to low ice. According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
            </p>
          </div>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {cate.map(c => {
              return (
                <>
                  <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent shadow-none text-center text-blue-gray-900">
                    <h5 className="font-sans text-xl font-bold leading-snug text-blue-gray-900 mb-2">{c.categoryName}</h5>
                    <p className="font-sans text-base leading-relaxed font-normal text-blue-gray-500">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                  </div>
                </>
              )
            })}
              
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent shadow-none text-center text-blue-gray-900">
              <h5 className="font-sans text-xl font-bold leading-snug text-blue-gray-900 mb-2">Grow Your Market</h5>
              <p className="font-sans text-base leading-relaxed font-normal text-blue-gray-500">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent shadow-none text-center text-blue-gray-900">
              <h5 className="font-sans text-xl font-bold leading-snug text-blue-gray-900 mb-2">Launch Time</h5>
              <p className="font-sans text-base leading-relaxed font-normal text-blue-gray-500">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="mx-auto w-full px-4 text-center lg:w-6/12">
            <p className="font-sans text-xl leading-relaxed text-inherit font-semibold">
              Liên hệ với chúng tôi
            </p>
            <h2 className="font-sans text-4xl font-bold leading-[1.3] text-blue-gray-900 my-3">
              Bạn có muốn làm việc với chúng tôi không ?
            </h2>
            <p className="font-sans text-xl font-normal leading-relaxed text-blue-gray-500">
              Vui lòng hoàn thành biểu mẫu này và chúng tôi sẽ phản hồi cho bạn trong vòng 24 giờ.
            </p>
          </div>

          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <div className="relative w-full min-w-[200px] h-11">
                <input className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Họ tên" />
              </div>
              <div className="relative w-full min-w-[200px] h-11">
                <input className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" />
              </div>             
            </div>
            <div className="relative w-full min-w-[200px] h-11">
              <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nội dung của bạn"></textarea>             
            </div>
            <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm mt-16 py-4 px-7 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] block w-full" type="button">
              Gửi tin nhắn
            </button>
          </form>
        </div>
      </section>
    <Footer />
    </>  
  )
}
export default Contact
