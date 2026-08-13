/* 

| Variable                       | Color                  | Uso                                            |
| ------------------------------ | ---------------------- | ---------------------------------------------- |
| `--primary-color`              | `#002112`              | Color principal                                |
| `--secondary-color`            | `#27AE61`              | Bordes, encabezados de tabla                   |
| `--text-color`                 | `white`                | Color del texto principal                      |
| `--accent-color`               | `#84d914`              | Acentos (hover en navegación, títulos h3 span) |
| `--background-color`           | `#00341d`              | Fondo del body                                 |
| `--background-secondary-color` | `#121212`              | Fondo de secciones alternativas y footer       |
| `--font-family`                | `'Nunito', sans-serif` | Fuente principal                               |




## 4. Secciones Específicas

### Sección Hero (#hero) - **Position y Multimedia**

💡 **Pista**: Usa `position` para superponer el banner sobre el video

#### Video Hero (.hero-video)

- **Elemento**: `<video>` con atributos `autoplay`, `muted`, `loop`, `playsinline`
- **Ubicación**: `/assets/video/hero.mp4`
- Debe cubrir todo el contenedor (💡 _sugerencia: `object-fit`_)

#### Banner Content (.banner-content)

- Debe estar centrado horizontalmente sobre el video
- Fondo semi-transparente: `rgba(0, 0, 0, 0.65)`

### Sección Products (#products) - **Display Flex**

💡 **Pista**: Crea un layout de tarjetas que se adapte al espacio disponible

- Fondo: `var(--background-secondary-color)`

#### Tarjetas de Producto (.product-card)

- `width: 300px`
- Bordes: `var(--secondary-color)`
- Títulos h3: `var(--accent-color)`

##### Imágenes de productos

- `height: 200px`
- **Ubicaciones**:
  - `/assets/images/desayuno.jpg`
  - `/assets/images/almuerzo.jpg`
  - `/assets/images/cena.jpg`
  - `/assets/images/snacks.webp`



*/