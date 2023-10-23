function TitleGroup() {

    const title = {};
    const variant = {};
    
    return (
        <>
            <h1>Botões</h1>
            {actions.map((action) => 
                (<Button key={action} variant="contained">{action}</Button>
                ))}
        </>
    );
}

export default ButtonGroup;