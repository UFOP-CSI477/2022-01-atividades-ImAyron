<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <title>Document</title>
</head>

<body style="background-color:#ffe187; color:rgb(128, 37, 5)">
    <nav class="navbar navbar-expand-lg bg-warning">
        <div class="container-fluid">
            <a class="navbar-brand" href="http://127.0.0.1:8000/">Inicio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="{{ route('pedidos.index') }}">Criar</a>
                    </li>
                
                    <li class="nav-item">
                        <a class="nav-link" href="{{route('notas.index')}}">Pedidos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{route('pedidos.index')}}">Novo Pedido</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{route('pedidos.index')}}">Novo Pedido</a>
                    </li>
                  
                </ul>
                <span class="navbar-text">

                </span>
            </div>
        </div>
    </nav>
   <div class="row">
    <div class="col">

    </div>
    <div class="col-8">
        <form action="{{route('pedidos.store')}}" method="post">
            @csrf   
        
                <div class="form-group"> <br>
                    <label for="nome">nome</label>
                    <input type="text" class="form-control" name="nome" id="nome" required>
                </div>
        
                <div class="form-group">
                    <label for="preco">Preço</label>
                    <input type="float" class="form-control" name="preco"  required>
                    
                </div>
        <p></p>
                <div class="text-right">
                    <input type="submit" value="Cadastrar" class="btn btn-primary">
                    <input type="reset" value="Limpar" class="btn btn-danger">
                </div>
        
            </form>
    </div>

    <div class="col">

    </div>
   </div>
   
</body>

</html>
