<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
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
                        <a class="nav-link" href="{{ route('notas.index') }}">Pedidos</a>
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
        <div class="col">
            <p></p>
            
            <img src="/img/imagem.png" class="img-thumbnail" alt="...">

            <p>
            <h3>{{ $pedido->nome }}</h3>
            </p>


            <p>
            <p>preco: {{ $pedido->preco }}</p>
            </p>
            <form name="frmDelete" action="{{ route('pedidos.destroy', $pedido->id) }}" method="post"
                onsubmit="return confirm('Confirma a exclusão do produto?');">
                <a href="{{ route('pedidos.edit', $pedido->id) }}"><input class="btn btn-secondary" type="button"
                        value="Editar"></a>
                <a href="http://127.0.0.1:8000/exibir"><input class="btn btn-secondary" type="button" value="Voltar"></a>
                @csrf
                @method('DELETE')
                <input class='btn btn-danger' type="submit" value="Excluir">
            </form>
        </div>
        <div class="col">

        </div>
    </div>


    

</body>
