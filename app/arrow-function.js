/*  if you have one argument and don't use brackets
    you can just write a snappy one-liner

    This is called the 'concise body'
*/
arr.map(i => i * 2);

//  multiple arguments go in parentheses
arr.reduce((prev, next) => prev + next);

//  no arguments are just an empty ()
//  note that you can use this for any function expression, not just callbacks!
let foo = () => console.log('bar');

/* if you need more than one line, then you need to use brackets
   and can't omit the return statement

    This is called the 'block body'
*/
let baz = (x) => {
    if (x > 1) return x;
    else return 1;
}


const Neo = {};
const agentSmiths = ['Smith1', 'Smith2', 'Smith3'];

Neo.kick = function (agent) {
    console.log('Neo kicked ', agent);
};

Neo.kickAgentSmiths = function () {
    agentSmiths.forEach(agent => this.kick(agent));
};

Neo.kickAgentSmiths();

/*
Neo kicked  Smith1
Neo kicked  Smith2
Neo kicked  Smith3*/



