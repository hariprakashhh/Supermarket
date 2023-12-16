import React from 'react'
export default function TryCatch({fruit}) {
    try{
        if(fruit === "Onion")
        {
            throw new Error("not a fruit")
        }
    }
    catch(error)
    {
        console.log("not a fruit");
        document.write(error)
    }
    finally{
        document.write("always executed")
    }

    return(
        <div>
            {fruit}
        </div>
    )
}