'use client';
export default function WTSUButton() {

    const handleClick = () => {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSdXpQDM4iE8h5CCY0FVx5n6B7fxv_TtAgzoPH-gNycNjbM0XA/viewform", "_blank");
    }
    const handlePaymentClick = () => {
        window.open("https://razorpay.me/@hilkin", "_blank");
    }

    return (
        <div className="  flex md:flex-row flex-col justify-between items-center w-full max-w-[300px]   sm:max-w-[600px] md:max-w-[700px] bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 px-2 sm:px-3 md:px-4 lg:px-5 gap-2 sm:gap-3 md:gap-4">
            <button onClick={handleClick}  className=" border-2 sm:border-3 max-md:w-full rounded-lg sm:rounded-xl flex-1 cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-90" >
                <div className="w-full text-white text-shadow flex justify-center items-center text-2xl px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-1.5 sm:py-2 md:pt-1 lg:pt-2   border-b-4 sm:border-b-6 md:border-b-8 lg:border-b-10 border-[#74C138] border-x-2 border-t-2 bg-[#9ED952] rounded-lg sm:rounded-xl ">
                    Fill The Form
                </div>
            </button>
            <button onClick={handlePaymentClick} className=" border-2 sm:border-3 rounded-lg sm:rounded-xl max-md:w-full flex-1 cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-90" >
                <div className="w-full text-white text-shadow flex justify-center items-center text-2xl   px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-1.5 sm:py-2 md:pt-1 lg:pt-2 border-b-4 sm:border-b-6 md:border-b-8 lg:border-b-10 border-[#74C138] border-x-2 border-t-2 bg-[#9ED952] rounded-lg sm:rounded-xl">
                    Make a Payment
                </div>
            </button>
        </div>
    );
}