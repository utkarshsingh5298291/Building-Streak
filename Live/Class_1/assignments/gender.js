const usersTable =[
    {
        name: "utkarsh",
        gender:"male"
    },
    {  
    name: "rishu",
    gender:"male"

    },
    {
        name: "deepti",
        gender:"female"
    }
]

for(let i=0;i<usersTable.length;i++)
{
    if(usersTable[i]["gender"]=="male")
    {
        console.log(usersTable[i]["name"]);
    }
}