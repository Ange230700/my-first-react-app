function SayHello(props) {
    console.log(props);
    return `Hello, my name is ${props.name}, I'm ${props.age}.`;
}

export default SayHello;