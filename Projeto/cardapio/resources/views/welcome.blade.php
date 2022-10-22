<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <title>Document</title>
    <style>
        a:hover{
            background-color:orange; 
        }
    </style>
</head>

<body style="background-color:#ffe187; color:rgb(128, 37, 5)">
    <div class="row">
        <div class="col">

        </div>
        <div class="col"style="background-color:#ff7d00;">
            <div>
                <img src="img/talher.png" class="mx-auto"style=" display: block;
                margin: 0px auto; width: 50%;text-align: center;" alt="...">  
            </div>
            <p></p>
            <div style="text-align: center; color: black; text-decoration:none;">
            
            <table class="table table-bordered">
                
                <tbody>
                  <tr class="bg-warning">
                    <th scope="row">  
                        <a style="text-align: center; color: black;text-decoration:none; " href="{{route('pedidos.index')}}">  Fazer Pedido </a>
                    </th>
                    
                    
                  </tr>
                  <tr class="bg-warning">
                    <th scope="row">
                        <a style="text-align: center; color: black;text-decoration:none;" href="{{route('notas.index')}}">Exibir Pedidos</a>
                    </th>
                   
                  </tr>
                  <tr class="bg-warning">
                    <th scope="row">
                        <a style="text-align: center; color: black;text-decoration:none;" href="{{route('pedidos.create')}}">Cadastrar Produto</a>
                    </th>
                    
                  </tr>
                  <tr class="bg-warning">
                    <th scope="row">
                        <a style="text-align: center; color: black;text-decoration:none;" href="http://127.0.0.1:8000/exibir">Exibir Produtos</a>
                    </th>
                    
                  </tr>
                  
                </tbody>
              </table>
            </div>
           <p></p>
        </div>
        <div class="col">
           
           
        </div>
    </div>

</body>

</html>