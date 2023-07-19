<template>
    <!--navbar-->
    <nav class="navbar navbar-expand-lg navbar-light bg-dark shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="/">
                <h1 class="text-white">noting</h1>
            </a>
            <button class="navbar-toggler border-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                    <i class="bi bi-list" style="color:white; font-size:28px"></i>
                </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link text-white " href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white active" href="/work">Work</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="/blog">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="https://form.run/@noting">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'LayoutHeader',
} 
</script>