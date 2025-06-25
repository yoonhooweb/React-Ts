function SwitchComponent( { light, handleLight } : {light :string , handleLight : (light : string) => void}) {

  return (
    <div>
        {light == "red" ? "멈추세요" : null}
        {light == "yellow" ? "주의하세요" : null}
        {light == "green" ? "지나가세요" : null}
        <button onClick={() => handleLight(light)}>라이트</button>
    </div>
  )
}

export default SwitchComponent