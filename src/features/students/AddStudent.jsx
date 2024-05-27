function AddStudent() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Button onClick={() => setShowForm((show) => !show)}>
        Add new Assignment
      </Button>

      {showForm && <CreateAssignmentForm />}
    </div>
  );
}

export default AddStudent;
