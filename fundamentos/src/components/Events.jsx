const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
        console.log('Chamou a funcao');
    };

    const renderLoremText = (x) => {
        if(x){
            return <p>Lorem 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur temporibus molestiae voluptatibus porro? Harum illum, maiores assumenda reprehenderit placeat praesentium odit! Nulla eaque iure quasi animi nesciunt voluptatibus sapiente tempora.</p>;
        }else{
            return <p>Loren 2L Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eos laudantium ipsam odit earum? Optio officiis, totam explicabo, vel minima quis perspiciatis inventore, reiciendis cupiditate iusto distinctio harum dolorem quod.</p>;
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Verificar Dados</button>
            </div>
            <div>{renderLoremText(true)}</div>
        </div>
    );
}

export default Events;