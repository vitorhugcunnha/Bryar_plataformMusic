export function FormasPagamentos(){
    return (
        <>
        <div className="bg-white p-[4px] rounded-[5px]">
            <img className="h-8 bg-[#ffffff] border-[2px] border-[#c7c7c7] rounded-[5px] pl-6 pr-6" src="src/assets/images/itau.png" />
        </div>
        <div className="bg-white p-[4px] rounded-[5px]">
            <img className="h-8 bg-[#ffffff] border-[2px] border-[#c7c7c7] rounded-[5px] pl-2 pr-2" src="src/assets/images/master.png" />
        </div>
        <div className="bg-white p-[4px] rounded-[5px]">
            <img className="h-8 bg-[#ffffff] border-[2px] border-[#c7c7c7] rounded-[5px] pl-4 pr-4 pt-2 pb-2" src="src/assets/images/pix.png" />
        </div>
        <div className="bg-white p-[4px] rounded-[5px]">
            <img className="h-8 bg-[#ffffff] border-[2px] border-[#c7c7c7] rounded-[5px] pl-4 pr-4" src="src/assets/images/visa.png" />
        </div>
        </>
    )
}