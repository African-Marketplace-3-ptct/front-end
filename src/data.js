 
export const users = [
    {
        id: 1,
        email: "email@email.com",
        password: "password",
        firstName: "fname",
        lastName: "lname",
    }
        
]
        

export const shops = [ 
        
    {
        id: 1,
        shopName: "candy store",
        description: "a place that sells african candy",
    },
    {
        id: 2,
        shopName: "scarf shop",
        description: "a place that sells scarfs"
    },
    {
        id: 3,
        shopName: "fruit shop",
        description: "a place that sells fruit",
        items: [
            {
            id: 1,
            itemName: "iteme name",
            itemdesc: "description",
            price: 13.00,
            imageUrl: "picsum.com/200",
        },
        {
            id: 2,
            itemName: "iteme name",
            itemdesc: "description",
            price: 13.00,
            imageUrl: "picsum.com/200",
        },
    ],
    },
]