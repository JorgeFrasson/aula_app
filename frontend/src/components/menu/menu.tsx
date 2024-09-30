import MenuItem, { MenuItemProps } from "./menu-item";

interface MenuProps {
    items: MenuItemProps[]
}

export default function Menu({ items }: MenuProps) {
    return (
        <div className="flex flex-col gap-2">
            { items.map((item) => (
                <MenuItem
                    action={item.action}
                    key={item.path} 
                    label={item.label}
                    path={item.path}
                />
            ))}
        </div>
    )
}