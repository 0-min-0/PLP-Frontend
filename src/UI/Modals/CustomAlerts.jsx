import Swal from 'sweetalert2'
import successImage from '../../assets/images/maletin.gif'
import errorImage from '../../assets/images/no-hay-datos.gif'
import companyLogo from '../../assets/images/plpLogo.png'
import '../../Style/custom-alerts.css'

export const showSuccessAlert = (navigate, formData, homeRoute) => {
  const getSetsRoute = () => {
    const path = location.pathname

    if (path.includes('contratante')) {
      return '/configuraciones-contratante/publicaciones-contratante'
    } else if (path.includes('empresa')) {
      return '/configuraciones-empresa/publicaciones-empresa'
    }
    return '/' // Fallback
  }

  const setsRoute = getSetsRoute()

  return Swal.fire({
    title: '<strong>Vacante publicada exitosamente</strong>',
    html: `
      <div class="swal-custom-content">
        <p class="swal-description">La vacante ha sido registrada en nuestro sistema.</p>
        <div class="swal-vacancy-card">
          <img src="${companyLogo}" alt="Company Logo" class="swal-company-logo">
          <div class="swal-vacancy-info">
            <p class="swal-vacancy-title">${formData.vacancyName || 'Nueva vacante'}</p>
            <p class="swal-vacancy-location">${formData.location || 'Ubicación no especificada'}</p>
          </div>
        </div>
      </div>
    `,
    imageUrl: successImage,
    imageWidth: 80,
    imageHeight: 80,
    imageAlt: 'Éxito',
    showCancelButton: true,
    confirmButtonText: 'Volver al inicio',
    cancelButtonText: 'Ver publicaciones',
    buttonsStyling: false,
    customClass: {
      popup: 'swal-success-popup',
      title: 'swal-success-title',
      htmlContainer: 'swal-html-container',
      confirmButton: 'swal-success-confirm-btn',
      cancelButton: 'swal-success-cancel-btn',
      image: 'swal-success-image'
    },
    showClass: {
      popup: 'swal-show-animation'
    },
    hideClass: {
      popup: 'swal-hide-animation'
    }
  }).then((result) => {
    if (result.isConfirmed) {
      navigate(homeRoute)
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      navigate(setsRoute)
    }
  })
}

export const showErrorAlert = () => {
  return Swal.fire({
    title: '<strong>Error al publicar vacante</strong>',
    html: `
      <div class="swal-custom-content">
        <p class="swal-description">No pudimos procesar tu solicitud.</p>
        <div class="swal-error-message">
          <p>Por favor intenta nuevamente.</p>
        </div>
      </div>
    `,
    imageUrl: errorImage,
    imageWidth: 80,
    imageHeight: 80,
    imageAlt: 'Error',
    confirmButtonText: 'Cerrar',
    buttonsStyling: false,
    customClass: {
      popup: 'swal-error-popup',
      title: 'swal-error-title',
      htmlContainer: 'swal-html-container',
      confirmButton: 'swal-error-confirm-btn',
      image: 'swal-error-image'
    },
    showClass: {
      popup: 'swal-show-animation'
    }
  })
}
