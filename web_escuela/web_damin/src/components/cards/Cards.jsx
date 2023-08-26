import React from "react";

const Cards = (props) => {
    return (
        <div className="card h-56 w-96 bg-white rounded-lg overflow-hidden shadow-md">
            <img
                src={props.image}
                alt={props.title}
                className="w-full h-4/6 object-cover"
            />
            <div className="w-3/10 p-2 flex flex-col justify-between">
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <p className="ml-4 text-xl font-thin">{props.month}</p>
                        <p className="ml-4 text-2xl font-normal text-custom">{props.day}</p>
                    </div>
                    <div >
                        <p className="text-xl font-normal ms-6 mt-2 mb-2">{props.title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
