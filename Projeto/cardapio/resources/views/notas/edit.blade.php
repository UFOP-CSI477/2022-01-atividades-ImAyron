<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <title>Document</title>
    <script>
        function Submeter() {
            document.forms.teste.submit();
        }
    </script>
</head>

<body OnLoad=Submeter() style="background-color:#ffe187; color:rgb(128, 37, 5)">
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
                        <a class="nav-link" href="{{ route('pedidos.index') }}">Novo Pedido</a>
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
            <img src="/img/gif.gif" class="img-thumbnail" alt="...">
            <H1>HMMMMMMMM , quase na hora de comer</H1>
            <form name="teste" action="{{ route('notas.update', $nota->id) }}" method="post">

                @csrf
                @method('PUT')
                <div class="form-group"> <br>

                    <input type="hidden" class="form-control" name="mesa" id="mesa"
                        value="{{ $nota->mesa }}">
                </div>

                <div class="form-group">

                    <input type="hidden" class="form-control" name="nota" value="{{ $nota->nota}}">

                </div>
                <div class="form-group">

                    <input type="hidden" class="form-control" name="total" value="{{ $nota->total}}">

                </div>
                <div class="form-group">

                  <input type="hidden" class="form-control" name="situation" value="{{1}}">

              </div>

                
            </form>
        </div>
        <div class="col">

        </div>
    </div>
</body>

</html>
