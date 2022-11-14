const mainContainer = document.querySelector('.m-container');

const contactMarkUp = `
<div class="container">
    <h2 class="title-contact">Contact Me</h2>
    <h4>Reach out to me if you are amazed</h4>
    <p class="details">
        <address>
            <strong>GitHub : </strong><a class="contact-link" href="https://github.com/manq2010" target="_blank">manq2010</a></p><br>
            <strong>LinkedIn : </strong><a class="contact-link" href="https://www.linkedin.com/in/mancoba-sihlongonyane/" target="_blank">Mancoba Sihlongonyane</a></p>
        </address>
    </p>
</div>
`;

const renderContact = () => {
  mainContainer.insertAdjacentHTML('beforeend', contactMarkUp);
};

export default renderContact;
