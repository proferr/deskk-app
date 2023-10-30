import { useState } from "react";
import { Box, List, ListItemButton } from "@mui/material";

interface Props {
    menu: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ menu, heading, onSelectItem }: Props) {
    const [selectedIndex, SetSelectedIndex] = useState(-1);

    return (
        <>
        <Box       
            sx={{
            width: 300,
            height: 300,
            backgroundColor: '#f2f2f2',
            borderRadius: "12px",
            padding: "10px"
        }}>
            <h1>{heading}</h1>
            {menu.length === 0 && <p>No item found</p>}
            <List>
                {menu.map((item, index) => (
                    <ListItemButton 
                        selected={selectedIndex === index} 
                        key={index}
                        onClick={() => {
                            SetSelectedIndex(index);
                            onSelectItem(item);
                        }}
                        divider
                    >
                    {item}
                    </ListItemButton>
                ))}
            </List>
        </Box>
        </>
    )
}

export default ListGroup;