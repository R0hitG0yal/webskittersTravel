const Options = ({ logo, label }: { logo: string, label: string }) => {
    return <button>
        <img src={logo} alt={label} />
        {label}
    </button>
}

export default Options;