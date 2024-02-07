import React, { useId } from "react";

export default React.forwardRef(function Select(
    { options, lable, className = "", ...props },
    ref
) {
    const id = useId();
    return (
        <div className="w-full">
            {lable && <label htmlFor={id}></label>}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-e-gray-200 w-full ${className}`}
            >
                {options?.map((option) => (
                    <options key={option} value={option}></options>
                ))}
            </select>
        </div>
    );
});
