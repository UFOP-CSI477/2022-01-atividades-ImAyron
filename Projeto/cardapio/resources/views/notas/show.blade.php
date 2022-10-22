<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
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
        <div class="col-6" style="text-align: center">
            <p></p>
            <p><img src="/img/picanha.jpg" class="img-thumbnail" alt="..."></p>

            <p>
            <h1><span class="badge bg-warning">MESA {{ $nota->mesa }}</span></h1>
            </p>
           <h2>Nota Detalhada</h2>
            <p></p>
            <ul class="list-group list-group-numbered ">
               
                <?php
                $str = $nota->nota;
                $arr = explode(' ', $str);
                for ($i = 0; $i < count($arr); $i++) {
                    echo '<li class="list-group-item list-group-item-warning">' . $arr[$i] . '</li>';
                }
                ?>
            </ul>
        <p></p>
            <h4><span class="badge bg-danger">Pedido total R${{ $nota->total }}</span></h4>
            <button class="btn btn-warning" ><a style='color:black;text-decoration:none;'href="{{ route('notas.edit', $nota->id) }}"> Pedido Pronto !!!</a></button>

        </div>
        <div class="col">

        </div>
    </div>
</body>

</html>

<script>

    function pedidoPronto(){

       
    }

</script>