export default function ResultButton() {
    const handleClick = () => {
        window.open('https://docs.google.com/document/d/1uMeesybWs7aWRscEMJtW4YFVqXG8gAVpcbvkaJ6XgIQ/edit?amp;fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnet9ycJwGWHNyA8nB7r8Vx2AmSm6g8k9DP2f9M5Fkt6e7psWKQVP0SMR5DY4_aem_ItCrHIZU-qCzFp-WBBkR1g&pli=1&tab=t.0', '_blank');
    }
    return (
        < button onClick={handleClick} className="w-full max-w-[312px] border-2 mt-5 rounded-xl cursor-pointer transition-transform duration-200 hover:scale-[1.01] active:scale-95" >
            <div
                className="w-full relative flex justify-center items-center  gap-6 px-6 p-2 text-white  shadow-[0_3px_0_#000] text-4xl   font-medium border-t-4 border-b-4 border-b-[#EC8F01]  border-t-[#FFF] text-shadow  rounded-xl cursor-pointer transition-transform duration-200 hover:scale-[1.01] active:scale-95"
                style={{
                    background:
                        "linear-gradient(180deg, #FFEA92 0%, #FFFABC 24%, #FFE673 50%, #FFC610 80%)",
                }}
            >
                Results
            </div>
        </button >
    )
}