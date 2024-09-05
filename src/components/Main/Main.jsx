/* eslint-disable react/prop-types */
import Form from "./Form";
import Info from "./Info";

const Main = ({ onView}) => {
    return <main className="bg-[#f5f7fa] h-[668px] flex justify-center ">
        <div className="w-[1200px] flex gap-[60px] justify-center items-center max-[1200px]:scale-[0.8]">
            <Info />
            <Form onView={onView}/>
        </div>


    </main>
}

export default Main;