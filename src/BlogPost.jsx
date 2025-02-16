import { Form,Button,Container } from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import Picture from './picture ';


const BlogPost=()=>{
    const{t,i18n}=useTranslation();

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert("FormSubmitted");
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return(
        <Container>
            
            <h1>{t("form.header")}</h1>
            <Form onSubmit ={handleSubmit}>
                <Form.Group controlId = "formName">
                    <Form.Label>{t('form.nameLabel')}</Form.Label>
                    <Form.Control type="text"  placeholder={t('form.namePlaceholder')}aria-label={t('form.nameLabel')}required/>
                    </Form.Group>

                    <Form.Group controlId="formBlog">
                        <Form.Label>{t('form.blogLabel')}</Form.Label>
                        <Form.Control type="text" placeholder={t('form.blogPlaceholder')} aria-label={t('form.blogLabel')}required/>
                    </Form.Group>

                   <Form.Group controlId = "formComments">
                        <Form.Label>{t('form.commentsLabel')}</Form.Label>
                        <Form.Control as ="textarea" rows={3} placeholder={t('form.commentsPlaceholder')} aria-label={t('form.commentsLabel')}/>
                    </Form.Group>

                        <Button variant="primary" type="submit">
                        {t('form.submitBtn')}
                        </Button>
                        </Form>

        <div className="mt-3">
            <Button onClick={()=>changeLanguage('en')} variant="success" className="me-2">English</Button>
            <Button onClick={()=>changeLanguage('es')} variant="warning" className="me-2">Espanol</Button>
     
        </div>
       <div classname ="mt-3">
       <Picture /><br />
       </div>

        </Container>
      

          
    );
};

export default BlogPost;