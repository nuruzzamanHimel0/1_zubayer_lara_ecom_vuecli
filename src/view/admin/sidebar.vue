<template>
    <div>
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                
                <li class="nav-item menu-open">
                    <a href="#" class="nav-link active">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                        Category
                        <i class="right fas fa-angle-left"></i>
                    </p>
                    </a>
                    <ul class="nav nav-treeview">
                   
                    <li class="nav-item">
                        <router-link tag="a" :to="{ name: 'allcategory'}"  class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>All Categories</p>
                        </router-link>
                    </li>
                     <li class="nav-item">
                        <router-link tag="a" :to="{ name: 'addcategory'}"  class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>
                        Add Category
                        </p>
                        </router-link>
                </li>
                    </ul>
                </li>

                   <li class="nav-item menu-open">
                    <a href="#" class="nav-link active">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                        Product
                        <i class="right fas fa-angle-left"></i>
                    </p>
                    </a>
                    <ul class="nav nav-treeview">
                   
                    <li class="nav-item">
                        <router-link tag="a" :to="{ name: 'allproduct'}"  class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>All Product</p>
                        </router-link>
                    </li>
                    
                    </ul>
                </li>

                <li class="nav-item">
                    <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-th"></i>
                    <p>
                      other
                    </p>
                    </a>
                </li>
                </ul>
    </div>
</template>