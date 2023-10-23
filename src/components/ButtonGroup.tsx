import { Card, CardContent, Typography, Button } from "@mui/material";

function ButtonGroup() {
    let actions = ["VOLTAR", "PRÓXIMO"];
    
    const handleClick = (event:MouseEvent) => console.log(event);

    return (
        <>
            <Card>
                <CardContent>
                    <Typography variant="h2" component="h2">
                        Possíveis ações
                    </Typography>
                    { actions.length === 0 && <p>No actions found</p> }
                    {actions.map((action) => 
                        (<Button key={action} 
                            variant={
                                selectedVariant === variant
                                ? "text"
                                : "contained"
                            } 
                            onClick={selectedAction}>{action}</Button>
                        ))}
                </CardContent>
            </Card>
        </>
    );
}

export default ButtonGroup;