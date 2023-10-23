import { useState } from "react";
import { Box, List, ListItemButton, Divider } from "@mui/material";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
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
            {items.length === 0 && <p>No item found</p>}
            <List>
                {items.map((item, index) => (
                    <ListItemButton 
                        selected={selectedIndex === index} 
                        key={index}
                        onClick={() => {
                            SetSelectedIndex(index);
                            onSelectItem(item);
                        }}
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