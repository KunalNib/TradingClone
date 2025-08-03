import React, { useContext ,useState} from 'react';
import BuyActionWindow from './BuyActionWindow';
import SellActionWindow from './SellActionWindow';

const GeneralContext=React.createContext({
    openBuyWindow:(uid)=>{},
    closeBuyWindow:()=>{},
    openSellWindow:(uid)=>{},
    closeSellWindow:()=>{},
})

export const  GeneralContextProvider=({children})=> {
    const[isBuyWindowOpen,setIsBuyWindowOpen]=useState(false);
    const[selectedStockUid,setselectedStockUid]=useState("");
    const[isSellWindowOpen,setIsSellWindowOpen]=useState(false);
    const handleOpenBuyWindow=(uid)=>{
        setIsBuyWindowOpen(true);
        setselectedStockUid(uid);
    };
    const handleCloseBuyWindow=()=>{
        setIsBuyWindowOpen(false);
        setselectedStockUid("");
    };

    const handleOpenSellWindow=(uid)=>{
        setIsSellWindowOpen(true);
        setselectedStockUid(uid);
    }

     const handleCloseSellWindow=()=>{
        setIsSellWindowOpen(false);
        setselectedStockUid("");
    };

    return ( 
        <GeneralContext.Provider
        value={{
                openBuyWindow:handleOpenBuyWindow,
                closeBuyWindow:handleCloseBuyWindow,
                openSellWindow:handleOpenSellWindow,
                closeSellWindow:handleCloseSellWindow
            }}>
                {children}
                {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUid}/>}  
                {isSellWindowOpen && <SellActionWindow uid={selectedStockUid}/>}  
        </GeneralContext.Provider>
     );
}

export default GeneralContext;