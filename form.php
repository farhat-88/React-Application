


<?php


class Pages extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->helper('form');
        $this->load->model('page_model');
    }

    public function contact()
    {
        $data['title'] = "Contact";

        $this->load->view('header', $data);
        $this->load->view('pages/contact', $data);
        $this->load->view('footer', $data);
    }

    public function contactSubmit()
    {
        $this->load->library('form_validation');
        $this->form_validation->set_rules('name', 'Name', 'trim|required');
        $this->form_validation->set_rules('email', 'Email', 'trim|required|valid_email');
        $this->form_validation->set_rules('subject', 'subject', 'trim|required');

        if ($this->form_validation->run() == false) {
            $response = array(
                'status' => 'error',
                'message' => validation_errors()
            );
        }
        else {
            $contactData = array(
                'name' => $this->input->post('name', true),
                'email' => $this->input->post('email', true),
                // 'phone' => $this->input->post('phone', true),
                'subject' => $this->input->post('subject', true),
                'created_at' => date('Y-m-d H:i:s')
            );

            $id = $this->page_model->insert_contact($contactData);

            $response = array(
                'status' => 'success',
                'message' => "<h3>Message send successfully.</h3>"
            );
        }

        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode($response));
    }
}
?>
