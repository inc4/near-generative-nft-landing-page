const useCopyToClipboard = () => {
  const handleCopy = (link) => {
    const el = document.createElement('textarea');
    el.value = link;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return { handleCopy };
};

export default useCopyToClipboard;
