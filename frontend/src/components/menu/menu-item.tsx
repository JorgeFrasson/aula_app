import { useCallback, useEffect, useState } from "react";
import { useRouter } from "../../hooks/use-router";

export interface MenuItemProps {
    path?: string;
    label: string;
    action?: () => VoidFunction; 
}

export default function MenuItem({ 
    label,
    path,
    action
}: MenuItemProps) {
    const [isSelected, setIsSelected] = useState(false);

    const router = useRouter();
    
    useEffect(() => {
        if(!path){
            return;
        }

        if(router.pathname == path){
            setIsSelected(true);
            return;       
        }
        
        setIsSelected(false);
        return;       
    }, [router.pathname]);

    const handleMenuItemClick = useCallback((_e: any) => {
        if(path) {
            router.push(path);
            return;
        }

        if(action){
            action();
            return;
        }

    }, [path]);

    return (
        <li 
            key={path} 
            className="flex flex-row gap-4 items-center pr-4 cursor-pointer" onClick={handleMenuItemClick}>
            <div className={"rounded-r-md w-2 h-10" + (isSelected ? " bg-blue-500" : "")}></div>
            <div className={`flex flex-row rounded-md w-full h-10 pl-4 ${isSelected ? "text-white" : "text-black"} items-center hover:bg-blue-500 hover:text-white` + (isSelected ? " bg-blue-500 text-white " : "")}>
                <p style={{ fontSize: "14px" }}>
                    {label}    
                </p>
            </div>
        </li>
    );
}
