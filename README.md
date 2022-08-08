enviroment variable file will return the literal value of the input as *STRING

i.e in a js file

   const login = process.env.LOGIN || false
   
 after puting env var value in terminal, it will return as the same exact value as string

    set LOGIN=true will return string 'true' *NOT BOOLEAN
    
    set LOGIN=!LOGIN will return '!LOGIN'
    
    set LOGIN=1 will return '1'
    
