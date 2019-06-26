import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private categorias = [
    {
      nombre: "Mecánica",
      descripcion: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "assets/mecanica.jpg",
      servidores: [
        {
          profesion: 'Mecanico',
          nombre: 'Francisco',
          apellidos: 'Martinez',
          fecha_nacimiento: '1989-02-12',
          telefono: 4813349034,
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
          img: "assets/avatar.png",
          tipos_trabajos:  [
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
          ],
        },
        {
          profesion: 'Mecanico',
          nombre: 'Sergio',
          apellidos: 'Ramirez',
          fecha_nacimiento: '1993-05-16',
          telefono: 4819829349,
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
          img: "assets/avatar.png",
          tipos_trabajos: [
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
          ],
        },
      ],
    },
    {
      nombre: "Enfermería",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
      img: "assets/enfermera.jpg",
      servidores: [
        {
          profesion: 'Enfermera',
          nombre: 'Sofia',
          apellidos: 'Martinez',
          fecha_nacimiento: '1989-02-12',
          telefono: 4813349034,
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
          img: "assets/avatar.png",
          tipos_trabajos: [
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
          ],
        },
        {
          profesion: 'Enfermera',
          nombre: 'María',
          apellidos: 'Ramirez',
          fecha_nacimiento: '1993-05-16',
          telefono: 4819829349,
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
          img: "assets/avatar.png",
          tipos_trabajos: [
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
          ],
        },
      ],
    },
    {
      nombre: "Niñería",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
      img: "assets/niñera.jpg",
      servidores: [
        {
          profesion: 'Niñera',
          nombre: 'Sofia',
          apellidos: 'Martinez',
          fecha_nacimiento: '1989-02-12',
          telefono: 4813349034,
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
          img: "assets/avatar.png",
          tipos_trabajos: [
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
          ],
        },
        {
          profesion: 'Niñera',
          nombre: 'María',
          apellidos: 'Ramirez',
          fecha_nacimiento: '1993-05-16',
          telefono: 4819829349,
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
          img: "assets/avatar.png",
          tipos_trabajos: [
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
          ],
        },
      ],
    },
    {
      nombre: "Enseñanza",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
      img: "assets/img_cdpuig_20180626-095311_imagenes_lv_terceros_ceu_valencia-045-kXKC-U45387832199wNH-992x558@LaVanguardia-Web.jpg",
      servidores: [
        {
          profesion: 'Maestro',
          nombre: 'Francisco',
          apellidos: 'Martinez',
          fecha_nacimiento: '1989-02-12',
          telefono: 4813349034,
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
          img: "assets/avatar.png",
          tipos_trabajos: [
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
          ],
        },
        {
          profesion: 'Maestro',
          nombre: 'Sergio',
          apellidos: 'Ramirez',
          fecha_nacimiento: '1993-05-16',
          telefono: 4819829349,
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
          img: "assets/avatar.png",
          tipos_trabajos: [
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
          ],
        },
      ],
    },{
      nombre: "Plomería",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
      img: "assets/43950021-diversos-tipos-de-herramientas-de-plomería-contra-el-fondo-blanco.jpg",
      servidores: [
        {
          profesion: 'Plomero',
          nombre: 'Francisco',
          apellidos: 'Martinez',
          fecha_nacimiento: '1989-02-12',
          telefono: 4813349034,
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
          img: "assets/avatar.png",
          tipos_trabajos: [
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
          ],
        },
        {
          profesion: 'Plomero',
          nombre: 'Sergio',
          apellidos: 'Ramirez',
          fecha_nacimiento: '1993-05-16',
          telefono: 4819829349,
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
          img: "assets/avatar.png",
          tipos_trabajos: [
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
          ],
        },
      ],
    },
    {
      nombre: "MakeUp",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
      img: "assets/maxresdefault.jpg",
      servidores: [
        {
          profesion: 'Maquillista',
          nombre: 'Sofia',
          apellidos: 'Martinez',
          fecha_nacimiento: '1989-02-12',
          telefono: 4813349034,
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
          img: "assets/avatar.png",
          tipos_trabajos: [
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
          ],
        },
        {
          profesion: 'Maquillista',
          nombre: 'María',
          apellidos: 'Ramirez',
          fecha_nacimiento: '1993-05-16',
          telefono: 4819829349,
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
          img: "assets/avatar.png",
          tipos_trabajos: [
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
          ],
        },
      ],
    },
    {
      nombre: "Electricidad",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
      img: "assets/herramientas-para-electricista.jpg",
      servidores: [
        {
          profesion: 'Electricista',
          nombre: 'Francisco',
          apellidos: 'Martinez',
          fecha_nacimiento: '1989-02-12',
          telefono: 4813349034,
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
          img: "assets/avatar.png",
          tipos_trabajos: [
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
          ],
        },
        {
          profesion: 'Electricista',
          nombre: 'Pedro',
          apellidos: 'Ramirez',
          fecha_nacimiento: '1993-05-16',
          telefono: 4819829349,
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
          img: "assets/avatar.png",
          tipos_trabajos: [
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
            {
              nombre: 'Lorem Ipsum',
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui metus. Praesent ac leo vel mi porta commodo id ac orci. Nullam pretium et erat id lobortis. Etiam bibendum rutrum mollis. Sed luctus augue sed molestie vulputate.",
              costo: 1000,
              contratar: false,
            },
          ],
        },
      ],
    },
  ];

  constructor() { }
  getServicios() {
    return this.categorias;

  }
  getServicios2() {
    return this.categorias;

  }
}
